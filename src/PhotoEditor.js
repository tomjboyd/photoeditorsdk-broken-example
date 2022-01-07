import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { PhotoEditorSDKUI, ImageFormat, ExportFormat } from 'photoeditorsdk';

const EmptyButton = () => <span />;

const PhotoEditorSDK = function(props) {
    useEffect(() => {
        const { container, editorInstance, image, transform } = props;

        const startEditor = async () => {
            const editor = await PhotoEditorSDKUI.init({
                assetBaseUrl: 'src/libs/assets/photoeditor_assets',
                container,
                custom: {
                    components: {
                        buttons: {
                            mainCanvasActionExport: EmptyButton,
                            mainCanvasActionClose: EmptyButton,
                        },
                    },
                },
                defaultTool: 'transform',
                export: {
                    image: {
                        enableDownload: false,
                        format: ImageFormat.JPEG,
                        exportType: ExportFormat.BLOB,
                    },
                },
                filter: {
                    enablePreviewThumbnails: true,
                },
                forceCrop: true,
                license:
                    // removed for public
                image,
                responsive: true,
                tools: ['transform', 'filter', 'text', 'sticker'],
                transform,
            });

            editorInstance(editor);
        };

        startEditor();
    }, []);

    return <div id="editor" style={{ width: '100vw', height: '100vh' }} />;
};

PhotoEditorSDK.propTypes = {
    container: PropTypes.object.isRequired,
    editorInstance: PropTypes.func,
    export: PropTypes.func.isRequired,
    fileName: PropTypes.string.isRequired,
    image: PropTypes.object.isRequired,
    transform: PropTypes.object,
};

export default PhotoEditorSDK;
