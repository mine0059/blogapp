import { getInitials } from "../../utils/helper"

const CharAvater = ({fullname, width, height, style,}) => {
  return (
    <div className={`${width} || 'w-12' ${height} || 'h-12' ${style} || '' flex items-center justify-center rounded-full text-gray-900 font font-medium bg-gray-100`}>
      {getInitials(fullname || '')}
    </div>
  )
}

export default CharAvater
