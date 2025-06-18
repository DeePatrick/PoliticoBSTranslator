interface TextFieldProps {
  label: string;
  textField: string | undefined;
  title?: string;
}

function TextField(props: TextFieldProps) {
  const label = props.label;
  const textField = props.textField;

  return (
    <div className="formfield">
      <div className="child-1 unite-task-text">{label}</div>
      <div className="child-2 unite-task-text">
        <span className="">
          <textarea
            title={props.title}
            rows={10}
            className="unite-textarea input-style"
            value={textField}
          />
        </span>
      </div>
    </div>
  );
}
export default TextField;
