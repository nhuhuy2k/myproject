import classNames from "classnames/bind";
const cx = classNames.bind()

function Modal({classes, children}){
    return (
        <div className={cx('w-28 h-11 p-3', classes)}>
            <h3 className={cx('mb-3')}>Notifications</h3>
            {children}
        </div>
    )
}

export default Modal