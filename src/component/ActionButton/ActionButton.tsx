import clsx from "clsx";
import { ActionButtonStyles } from "./ActionButtonStyles";

interface ActionButtonProps {
  className?: any;
  content: string;
  action?: () => void;
  disable?: boolean;
}

export default function ActionButton({
  className,
  content,
  action,
  disable,
}: ActionButtonProps) {
  const classes = ActionButtonStyles();

  return (
    <div
      className={clsx(
        className,
        classes.root,
        disable ? classes.disable : classes.noDisable
      )}
      onClick={disable ? () => {} : action}
    >
      <p className={classes.des}>{content}</p>
    </div>
  );
}
