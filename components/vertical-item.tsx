export default function VerticalItem(props: any) {
  return (
    <dl className={"f6 lh-title mv2 mr4"}>
      <dt className={"dib b"}>
        {props.label}
        {":"}{" "}
      </dt>
      <dd className={"dib ml1 gray"}>{props.value}</dd>
    </dl>
  );
}
