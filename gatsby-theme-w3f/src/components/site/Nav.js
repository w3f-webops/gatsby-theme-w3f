import { useTranslation } from 'gatsby-plugin-react-i18next';
import React from 'react';

import { Link } from '../default/Link';

const Menu = () => {
  const { t } = useTranslation();
  return (
    <menu>
      <li>
        <Link to={'/'}>{t('home')}</Link>
      </li>
    </menu>
  );
};

export default Menu;
