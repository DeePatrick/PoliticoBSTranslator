import Icon from "react-icons-kit";
import { eyeOff } from "react-icons-kit/feather/eyeOff";
import { eye } from "react-icons-kit/feather/eye";

interface InputFieldProps {
  label: string | undefined;
  inputField: string | undefined;
  inputType?: string;
  handleToggle?: () => void;
  inputIcon?: string;
  size?: string;
  title?: string;
}

function InputField(props: InputFieldProps) {
  const label = props.label;
  const inputField = props.inputField;
  const inputType = props.inputType;
  const inputIcon = props.inputIcon;

  return (
    <div>
      <div
        className={
          props.size
            ? "child-1 unite-task-text x-small"
            : "child-1 unite-task-text"
        }
      >
        {label}
      </div>
      <div className="child-2 unite-task-text">
        <span className="input-style">
          <input
            title={props.title}
            type={inputType}
            className="unite-task"
            value={inputField || "\u00A0"}
          />
        </span>
        {inputType && (
          <>
            <span
              className="flex justify-around items-center"
              onClick={props.handleToggle}
            >
              <Icon
                className="absolute mr-10"
                icon={inputIcon === "eyeOff" ? eyeOff : eye}
                size={12}
              />
            </span>
          </>
        )}
      </div>
    </div>
  );
}
export default InputField;
