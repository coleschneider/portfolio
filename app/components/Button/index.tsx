import { AnchorHTMLAttributes } from 'react';
import styles from './styles.module.scss';
import classNames from 'classnames';

type LinkProps = React.DetailedHTMLProps<
  AnchorHTMLAttributes<HTMLAnchorElement>,
  HTMLAnchorElement
> & { to: string };
type ButtonProps = React.HTMLAttributes<HTMLButtonElement>;
type CommonProps = { variant?: 'primary' | 'secondary' };
type Props = (LinkProps | ButtonProps) & CommonProps;

export const Button: React.FunctionComponent<Props> = ({
  children,
  className,
  variant,
  ...rest
}) => {
  if ('to' in rest) {
    return (
      <a
        {...rest}
        className={classNames(styles.link, className, variant)}
        href={rest.to}
      >
        {children}
      </a>
    );
  }
  return (
    <button className={classNames(styles.button, className, variant)} {...rest}>
      {children}
    </button>
  );
};
