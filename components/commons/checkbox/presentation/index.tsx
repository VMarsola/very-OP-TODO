import styles from "./styles.module.css";

export interface CheckboxProps {
  checked?: boolean;
  label: string;
  name?: string;
}

export function CheckboxPresentation({
  checked = false,
  label,
  name,
}: CheckboxProps) {
  return (
    <label className={styles.checkboxLabel}>
      <input
        className={styles.nativeCheckbox}
        type="checkbox"
        name={name}
        defaultChecked={checked}
        aria-label={label}
      />
      <span aria-hidden="true" className={styles.visualCheckbox} />
    </label>
  );
}
