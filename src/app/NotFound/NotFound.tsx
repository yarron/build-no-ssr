import React, { FC } from 'react';
import { HttpStatus } from '@/utils/components/HttpStatus';

const NotFoundPage: FC = () => (
  <HttpStatus code={404}>
    <div>
      Page not found
    </div>
  </HttpStatus>
);

export default NotFoundPage;
