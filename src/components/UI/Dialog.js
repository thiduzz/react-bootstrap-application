import './Dialog.scss'
import Button from "./Button";

const Dialog = (props) => {
    const overlayClasses = "overlay " + (props.classOverlay ? props.classOverlay : '')
    const backdropClasses = "backdrop " + (props.classBackdrop ? props.classBackdrop : '')
    const dialogClasses = "dialog " + (props.className ? props.className : '')
    const onCloseHandler = () => { props.onClose() };
    return (
        <div className={ overlayClasses } >
            <div className={backdropClasses} onClick={onCloseHandler}/>
            <div className={ dialogClasses }>
                <div>
                    {props.children}
                </div>
                <div className="mt-5 flex flex-row justify-end">
                    <Button onClick={onCloseHandler}>Okay</Button>
                </div>
            </div>
        </div>
    );
}

export default Dialog;