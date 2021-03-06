/*
 * cloudbeaver - Cloud Database Manager
 * Copyright (C) 2020 DBeaver Corp and others
 *
 * Licensed under the Apache License, Version 2.0.
 * you may not use this file except in compliance with the License.
 */

import { ReactElement } from 'react';

import { NodeWithParent } from '@dbeaver/core/app';
import { ITab } from '@dbeaver/core/blocks';

import { objectPropertyTablePanel } from '../ObjectPropertyTable/ObjectPropertyTable';

export class ObjectFolderTabModel implements ITab {
  readonly tabId: string;

  get title(): string {
    return this.node.name || '';
  }
  get icon(): string | undefined {
    return this.node.icon;
  }

  panel: () => ReactElement | null;

  constructor(private node: NodeWithParent,
              public onActivate: () => void) {
    this.tabId = node.id;
    this.panel = () => objectPropertyTablePanel(node.parentId, node.id);
  }

}
