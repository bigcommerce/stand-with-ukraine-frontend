import { Collapse } from '@bigcommerce/big-design';
import { useState } from 'react';
import BodySmall from '../Setup/Steps/common/BodySmall';

export default function FAQ() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Collapse
        title={open ? 'Hide FAQ' : 'Show FAQ'}
        onCollapseChange={setOpen}
      ></Collapse>
      {open ? (
        <BodySmall>Frequently Asked Questions: 1. Question 1....</BodySmall>
      ) : null}
    </>
  );
}
