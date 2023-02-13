const NewsSlick = (props) => {
    const {item} = props;
    return (
        <div className="news-item">
            <div className="news-img">
                <img loading="lazy" src={item.link} alt="" />
            </div>

            <div className="news-info">
                <span className="news-date">{item.date}</span>
                <h3 className="news-title">
                    <a href="#">{item.title}</a>
                </h3>
                <a href="#" className="news-link">Read More</a>
            </div>

        </div>
    )
}
export default NewsSlick;