const NewsSlick = (props) => {
  const { item } = props;
  return (
    <div className="news-item">
      <div className="news-img">
        <img skeleton="true" loading="lazy" src={item.link} alt="" />
      </div>

      <div className="news-info">
        <span className="news-date">{item.date}</span>
        <h3 className="news-title">
          <a href="#">{item.title}</a>
        </h3>
        {/* <a href="#" className="news-link">
          Read More
        </a> */}
        <button class="cta">
          <span class="hover-underline-animation"> Shop now </span>
          <svg
            fill="white"
            viewBox="0 0 46 16"
            height="10"
            width="30"
            xmlns="http://www.w3.org/2000/svg"
            id="arrow-horizontal"
          >
            <path
              transform="translate(30)"
              d="M8,0,6.545,1.455l5.506,5.506H-30V9.039H12.052L6.545,14.545,8,16l8-8Z"
              data-name="Path 10"
              id="Path_10"
            ></path>
          </svg>
        </button>
      </div>
    </div>
  );
};
export default NewsSlick;
