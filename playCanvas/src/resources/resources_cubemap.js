pc.extend(pc.resources, function () {
    var CubemapResourceHandler = function (device, assets, loader) {
        this._device = device;
        this._assets = assets;
    };
    CubemapResourceHandler = pc.inherits(CubemapResourceHandler, pc.resources.ResourceHandler);

    CubemapResourceHandler.prototype.load = function (request, options) {
        var promise = null;

        if (pc.string.startsWith(request.canonical, "asset://")) {
            // Loading from asset (platform)
            promise = new pc.promise.Promise(function (resolve, reject) {
                var asset = this._getAssetFromRequest(request);
                if (!asset) {
                    reject(pc.string.format("Can't load cubemap, asset {0} not found", request.canonical));
                }

                // load textures before resolving the promise to make sure
                // we have them when we create the cubemap, otherwise this will
                // cause issues in cases like cubemaps used in materials which will be
                // rendered without textures in the Designer
                this._loadCubemapTextures([], asset.data, request).then(function (textures) {
                    var data = pc.extend({}, asset.data);
                    data.textures = textures;
                    resolve(data);
                });

            }.bind(this));
        } else {
            // Loading from URL (engine-only)
            // Load cubemap data from a file (as opposed to from an asset)
            promise = new pc.promise.Promise(function (resolve, reject) {
                pc.net.http.get(request.canonical, function(response) {
                    var data = pc.extend({}, response);
                    data.textures = [];

                    var textures = response.textures;
                    if (textures.length) {
                        // Create and load all referenced textures
                        var assets = [];
                        textures.forEach(function (path) {
                             var filename = pc.path.getBasename(path);
                             var url = pc.path.join(pc.path.split(request.canonical)[0], path);
                             assets.push(new pc.asset.Asset(filename, 'texture', {
                                 url: url
                             }));
                        });

                        this._assets.load(assets).then(function (responses) {
                             // Only when referenced assets are loaded do we resolve the cubemap load
                             data.textures = responses.map(function (texture) {
                                return texture.getSource();
                             });
                             resolve(data);
                         }, function (error) {
                            reject(error);
                         });
                    } else {
                        resolve(data);
                    }
                }.bind(this), {
                    error: function () {
                        reject();
                    }
                });
            }.bind(this));
        }

        return promise;
    };

    CubemapResourceHandler.prototype.open = function (data, request, options) {
        var texture = null;

        // create cubemap texture
        if (request.result) {
            texture = request.result;
        } else {
            texture = new pc.gfx.Texture(this._device, {
                format: pc.gfx.PIXELFORMAT_R8_G8_B8,
                cubemap: true
            });
        }

        // set texture data
        texture.name = data.name;
        texture.maxAnisotropy = data.anisotropy;
        texture.minFilter = data.minFilter;
        texture.magFilter = data.magFilter;
        texture.addressU = pc.gfx.ADDRESS_CLAMP_TO_EDGE;
        texture.addressV = pc.gfx.ADDRESS_CLAMP_TO_EDGE;

        if (this._areValidTextures(data.textures, true)) {
            texture.setSource(data.textures);
        }

        // make sure we update the cubemap if the asset changes
        var asset = this._getAssetFromRequest(request);
        asset.on('change', function (asset, attribute, value) {
            if (attribute === 'data') {
                this._updateCubemapData(texture, value);
            }
        }, this);

        return texture;
    };

    // Checks if there are 6 non-null textures in the specified array
    CubemapResourceHandler.prototype._areValidTextures = function (textures, showErrors) {
        var result = textures && textures.length === 6;
        var error;

        if (result) {
            var width = textures[0] ? textures[0].width : null;
            var height = textures[0] ? textures[0].height : null;

            for (var i = 0; i < 6; i++) {
                if (!textures[i]) {
                    result = false;
                    break;
                }


                if ((!textures[i] instanceof HTMLCanvasElement) ||
                    (!textures[i] instanceof HTMLImageElement) ||
                    (!textures[i] instanceof HTMLVideoElement)) {
                    error = 'Cubemap source is not an instance of HTMLCanvasElement, HTMLImageElement or HTMLVideoElement.';
                    result = false;
                    break;
                }

                if (textures[i].width !== width  || textures[i].height !== height) {
                    error = 'Cubemap sources do not all share the same dimensions.';
                    result = false;
                    break;
                }
            }

        }

        if (error && showErrors) {
            alert(error);
        }

        return result;
    };

    // Loads the textures of the cubemap - Returns a promise
    CubemapResourceHandler.prototype._loadCubemapTextures = function (existingSources, data, request) {
        var promise = new pc.promise.Promise(function (resolve, reject) {
            // initialize existing sources if needed
            if (!this._areValidTextures(existingSources)) {
                existingSources = [null, null, null, null, null, null];
            }

            if (this._areValidTextures(data.textures)) {
                var sourceIndexes = [];

                var requests = [];
                for (var i = 0; i < 6; i++) {

                    if (data.textures[i] !== null) {
                        var asset = this._assets.getAssetById(data.textures[i]);
                        if (!asset) {
                            pc.log.error(pc.string.format('Could not load cubemap - Texture {0} not found', data.textures[i]));
                            return;
                        }

                        // try to avoid making a texture request if the image is the same
                        if (!existingSources[i] || !pc.string.endsWith(existingSources[i].src, asset.getFileUrl())) {
                            requests.push(new pc.resources.TextureRequest(asset.getFileUrl()));
                            sourceIndexes.push(i);
                        }
                    }
                }

                if (requests.length) {
                    // update sources with the new images
                    this._loader.request(requests).then(function (resources) {
                        for (var i = 0; i < sourceIndexes.length; i++) {
                            existingSources[sourceIndexes[i]] = resources[i].getSource();
                        }

                        // call callback
                        resolve(existingSources);
                    }, function (error) {
                        reject(error);
                    });
                } else {
                    // call callback instantly
                    resolve(existingSources);
                }
            } else {
                resolve(existingSources);
            }
        }.bind(this));

        return promise;
    };

    // Updates cubemap data and reloads textures
    CubemapResourceHandler.prototype._updateCubemapData = function (cubemap, data, request) {
        if (cubemap.name !== data.name) {
            cubemap.name = data.name;
        }

        if (cubemap.minFilter !== data.minFilter) {
            cubemap.minFilter = data.minFilter;
        }

        if (cubemap.magFilter !== data.magFilter) {
            cubemap.magFilter = data.magFilter;
        }

        if (cubemap.addressU !== pc.gfx.ADDRESS_CLAMP_TO_EDGE) {
            cubemap.addressU = pc.gfx.ADDRESS_CLAMP_TO_EDGE;
        }

        if (cubemap.addressV !== pc.gfx.ADDRESS_CLAMP_TO_EDGE) {
            cubemap.addressV = pc.gfx.ADDRESS_CLAMP_TO_EDGE;
        }

        if (cubemap.maxAnisotropy !== data.anisotropy) {
            cubemap.maxAnisotropy = data.anisotropy;
        }

        this._loadCubemapTextures(cubemap.getSource(), data, request).then(function (textures) {
            if (this._areValidTextures(textures, true)) {
                cubemap.setSource(textures);
            }
        }.bind(this));
    };

    CubemapResourceHandler.prototype._getAssetFromRequest = function (request) {
        if (pc.string.startsWith(request.canonical, "asset://")) {
            return this._assets.getAssetById(parseInt(request.canonical.slice(8)));
        } else {
            return this._assets.getAssetByUrl(request.canonical);
        }
    };

    var CubemapRequest = function (identifier) {
    };
    CubemapRequest = pc.inherits(CubemapRequest, pc.resources.ResourceRequest);
    CubemapRequest.prototype.type = "cubemap";
    CubemapRequest.prototype.Type = pc.gfx.Texture;

    return {
        CubemapResourceHandler: CubemapResourceHandler,
        CubemapRequest: CubemapRequest
    };
}())    ;
