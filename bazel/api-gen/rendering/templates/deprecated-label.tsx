/*!
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.dev/license
 */

import {Fragment, h} from 'preact';
import {PARAM_KEYWORD_CLASS_NAME} from '../styling/css-classes';

export function DeprecatedLabel(props: {
  entry: {isDeprecated: boolean} | {deprecationMessage: string | null};
}) {
  const entry = props.entry;

  if ('isDeprecated' in entry && !('deprecationMessage' in entry)) {
    return <span className={`${PARAM_KEYWORD_CLASS_NAME} docs-deprecated`}>@deprecated</span>;
  } else if ('deprecationMessage' in entry && entry.deprecationMessage !== null) {
    return (
      <div>
        <span className={`${PARAM_KEYWORD_CLASS_NAME} docs-deprecated`}>@deprecated</span>
        <span>{entry.deprecationMessage}</span>
      </div>
    );
  }

  return <></>;
}
