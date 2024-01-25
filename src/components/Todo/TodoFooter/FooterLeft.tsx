type Props = { tasksNumber: number }
export default function FooterLeft({ tasksNumber }: Props) {
  const text =
    tasksNumber > 1
      ? `${tasksNumber} items left`
      : tasksNumber === 1
        ? '1 item left'
        : 'No items left'

  return <div className=''>{text}</div>
}
