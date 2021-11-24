export const hh = (count:Number) => {
	return <div>{count}</div>
}
interface SlotsType {
    default:()=>void,
    name:()=>void
}
export const slotsTest = (slots:SlotsType) => {
    return <div>
        <div>{slots.default()}</div>
        <div>{slots.name()}</div>
    </div>
}