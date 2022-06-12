import classNames from "classnames/bind"

const cx = classNames.bind()

function Button({children, classes, onClick}) {

    return(
        <button onClick={onClick} className={cx('', classes)}>
            {children}
        </button>
    )
}

export default Button