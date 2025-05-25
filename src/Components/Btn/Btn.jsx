
const Btn = ({ text, className, onClick, type, icon}) => {
  return (
    <button
     type={type}
     onClick={onClick}
     className={className}
     >
      {icon}
      {text}
    </button>
  )
}

export default Btn;