            init = function () {
                var _this = this;
                var items = [
                  'https://truck/api/1',
                  'https://truck/api/2',
                  'https://truck/api/3'
                ]
                for (var p in items) {
                    var uri = items[p];
                    if (uri) {                    
                        var temporaryDownloadLink = document.createElement("a");
                        temporaryDownloadLink.style.display = 'none';
                        temporaryDownloadLink.setAttribute('href', uri);
                        temporaryDownloadLink.setAttribute('download', "test");
                        temporaryDownloadLink.classList.add('document-dl');
                        document.body.appendChild(temporaryDownloadLink);
                    }
                }
                _this.download();                    
            };

            download = function () {
                var elements = document.querySelectorAll('.document-dl');
                Array.prototype.forEach.call(elements, function (item, index) {
                    this.createIFrame(item, index * 100, 1000);
                }.bind(this));
            };
            createIFrame = function (item, triggerDelay, cleaningDelay) {
                setTimeout(function () {
                    var iframe = document.createElement("iframe");
                    iframe.style.display = 'none';
                    iframe.classList.add('multi-download-frame');
                    iframe.setAttribute('src', item.getAttribute('href'));
                    item.insertAdjacentElement('afterend', iframe);
                    setTimeout(function () {
                        if (iframe.parentNode !== null) {
                            iframe.parentNode.removeChild(iframe);
                        }
                        if (item.parentNode !== null) {
                            item.parentNode.removeChild(item);
                        }                                
                    }, cleaningDelay);
                }, triggerDelay);
            };
