import type { ReactNode } from "react";
import classes from "./error-alert.module.css";

interface ErrorAlertProps {
  children: ReactNode;
}

function ErrorAlert({ children }: ErrorAlertProps) {
  return <div className={classes.alert}>{children}</div>;
}

export default ErrorAlert;
