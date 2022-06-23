import { Link, LinkProps as RouterLinkProps } from 'react-router-dom';

import {
  Button as BigDesignButton,
  ButtonProps,
} from '@bigcommerce/big-design';

export default function RouterButton({
  linkProps,
  ...buttonProps
}: ButtonProps & { linkProps: RouterLinkProps }) {
  return (
    <Link className="router-link" {...linkProps}>
      <BigDesignButton {...buttonProps} />
    </Link>
  );
}
