const TextTitle = ({title, extraStyle}) => {
    return (
        <div className={`text-title ${extraStyle}`}>
          <h1 className="topic">
            {title}
          </h1>
          <h1>News</h1>
        </div>
    )
}

export default TextTitle;