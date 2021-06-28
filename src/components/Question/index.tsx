import { ReactNode } from 'react';
import cx from 'classnames';

import './styles.scss';
import { is } from '@babel/types';

type QuestionProps = {
  content: string;
  authorId: {
    name: string;
    avatar: string;
  };
  children?: ReactNode;
  isAnswered?: boolean;
  isHighLighted?: boolean;
}

export function Question({
  content,
  authorId,
  isAnswered = false,
  isHighLighted = false,
  children,
}: QuestionProps) {
  return (
    <div className={cx(
      'question',
      { answered: isAnswered },
      { highlighted: isHighLighted && !isAnswered },
    )}
    >
      <p>{content}</p>
      <footer>
        <div className="user-info">
          <img src={authorId.avatar} alt={authorId.name} />
          <span>{authorId.name}</span>
        </div>
        <div>{children}</div>
      </footer>
    </div>
  );
}