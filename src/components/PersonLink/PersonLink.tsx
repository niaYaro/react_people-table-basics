import { Link } from 'react-router-dom';
import classNames from 'classnames';
import { Person } from '../../types';

interface Props {
  person: Person;
}

export const PersonLink: React.FC<Props> = ({
  person,
}) => {
  const {
    name,
    slug,
    sex,
  } = person;

  return (
    <Link
      to={`/people/${slug}`}
      className={classNames({
        'has-text-danger': sex === 'f',
        'has-text-link': sex === 'm',
      })}
    >
      {name}
    </Link>
  );
};