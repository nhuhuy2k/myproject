import { faFacebook } from "@fortawesome/free-brands-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import classNames from "classnames/bind"

const cx = classNames.bind()
const listPages = [{icon: faFacebook, title: "Facebook Hoàng Hà mobile", color: "text-blue"},
{icon: faFacebook, title: "Facebook Hoàng Hà mobile", color: "text-red"},
{icon: faFacebook, title: "Facebook Hoàng Hà mobile", color: "text-yellow"},
{icon: faFacebook, title: "Facebook Hoàng Hà mobile"}
]

function Social() {
    return (
        <>
        <div className={cx("fixed top-1/2 translate-y-[-50%] left-20 flex flex-col bg-white rounded-3xl space-y-2")}>
            {listPages.map((item, index) => {
               return <div key={index} title={item.title} className={cx("cursor-pointer")}>
                    <FontAwesomeIcon icon={item.icon} className={cx('text-4xl' , item.color)} />
                </div>
            })}
        </div> 
        </> 
    )
}


export default Social