import * as React from 'react'

function RoundedButton(prop) {
  return (
    <button
      type="button"
      className={`${prop.text} ${prop.btnColor} ${prop.bdrColor} ${prop.customCss}` + " rounded-full px-3 py-2 text-sm font-semibold shadow-sm hover:bg-black/80 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"}
    >
      {prop.value}
    </button>
  )
}

export default RoundedButton;