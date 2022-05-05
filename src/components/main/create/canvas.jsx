/* eslint-disable react/prop-types */
/* eslint-disable react/no-array-index-key */
/* eslint-disable no-param-reassign */
/* istanbul ignore file */
import React, {
    createRef,
    useState,
    useCallback,
    useEffect,
    useRef,
} from 'react';
import { useDispatch } from 'react-redux';
import { Layer, Stage } from 'react-konva';
import { IndividualSticker } from './stickers';
import './canvas.scss';
import { useAppSelector } from '../../../redux/hooks';
import { getItems } from '../../../services/api/item-api';
import loadItems from '../../../redux/item/action-creators';

function Canvas({ togglePopup }) {
    const dispatch = useDispatch();
    const itemState = useAppSelector((state) => state.items);

    useEffect(() => {
        getItems().then(() => {
            dispatch(loadItems());
        });
    }, []);

    const [images, setImages] = useState([]);

    const addStickerToPanel = ({ src, width, x, y }) => {
        setImages((currentImages) => [
            ...currentImages,
            {
                width,
                x,
                y,
                src,
                resetButtonRef: createRef(),
            },
        ]);
    };

    const resetAllButtons = useCallback(() => {
        images.forEach((image) => {
            if (image.resetButtonRef.current) {
                image.resetButtonRef.current();
            }
        });
    }, [images]);

    const handleCanvasClick = useCallback(
        (event) => {
            if (event.target.attrs.id === 'backgroundImage') {
                resetAllButtons();
            }
        },
        [resetAllButtons]
    );

    const canvasRef = useRef(null);

    const handleExport = () => {
        canvasRef.current.toDataURL();
    };

    return (
        <div className="canvas">
            <div className="stage__container">
                <h1 className="stage__title">Drag image to canvas</h1>
                <div className="canvas__button__container">
                    <button
                        className="canvas__button"
                        type="button"
                        onClick={() => togglePopup()}
                    >
                        Create collection
                    </button>
                    <button
                        className="canvas__button"
                        type="button"
                        onClick={handleExport}
                    >
                        Export image
                    </button>
                </div>

                <Stage
                    width={600}
                    height={600}
                    onClick={handleCanvasClick}
                    onTap={handleCanvasClick}
                    className="stage"
                    ref={canvasRef}
                >
                    <Layer>
                        {images.map((image, i) => {
                            console.log(image);
                            image.crossOrigin = 'Anonymous';
                            return (
                                <IndividualSticker
                                    onDelete={() => {
                                        const newImages = [...images];
                                        newImages.splice(i, 1);
                                        setImages(newImages);
                                    }}
                                    onDragEnd={(event) => {
                                        image.x = event.target.x();
                                        image.y = event.target.y();
                                    }}
                                    key={i}
                                    image={image}
                                />
                            );
                        })}
                    </Layer>
                </Stage>
            </div>
            <div className="sticker__container">
                <input
                    className="sticker__search"
                    type="text"
                    placeholder="Search"
                />
                <div className="sticker__container__buttons">
                    <button type="button" className="sticker__button">
                        Category
                    </button>
                    <button type="button" className="sticker__button">
                        Price
                    </button>
                </div>

                <div className="stickers">
                    {itemState.items.map((item) => (
                        <button
                            type="button"
                            className="stickers__button"
                            onMouseDown={() => {
                                addStickerToPanel({
                                    src: item.img,
                                    width: 200,
                                    x: 100,
                                    y: 100,
                                });
                            }}
                        >
                            <img alt="none" src={item.img} width="100px" />
                        </button>
                    ))}
                </div>
            </div>
        </div>
    );
}
export default Canvas;
