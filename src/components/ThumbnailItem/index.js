// Write your code here.

const ThumbnailItem = props => {
  const {item, displayImg} = props
  const {thumbnailUrl, thumbNailAltText, id} = item

  const onClickThumbNailButton = () => {
    displayImg(id)
  }
  return (
    <li>
      <button type="button" onClick={onClickThumbNailButton}>
        <img src={thumbnailUrl} alt={thumbNailAltText} />
      </button>
    </li>
  )
}

export default ThumbnailItem
