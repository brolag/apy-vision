import styles from "./Spinner.module.css"

export default function Spinner() {
  return (
    <div className="flex items-center h-screen">
      <div
        className={`${styles.loader} m-auto ease-linear rounded-full border-8 border-t-8 border-gray-300 h-28 w-28`}
      ></div>
    </div>
  )
}
