export const Spinner = ({ style }: { style: Record<string, unknown> }) => {
  return (
    <div className="lds-grid" style={style}>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
};
