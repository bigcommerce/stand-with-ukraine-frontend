import { Button as BigDesignButton, ButtonProps } from '@bigcommerce/big-design';
import { Link, LinkProps as RouterLinkProps } from 'react-router-dom';

export default function RouterButton({
  linkProps,
  ...buttonProps
}: ButtonProps & { readonly linkProps: RouterLinkProps }) {
  return (
    <Link className="router-link" {...linkProps}>
      <BigDesignButton {...buttonProps} />
    </Link>
  );
}
