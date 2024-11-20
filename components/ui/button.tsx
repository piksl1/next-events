import Link from "next/link";
import styles from "./button.module.css";
interface ButtonProps {
  link: string;
  children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({ link, children }) => {
  if (link) {
    return (
      <Link href={link} className={styles.btn}>
        {children}
      </Link>
    );
  }

  return <button className={styles.btn}>{children}</button>;
};
export default Button;
