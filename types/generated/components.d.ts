import type { Schema, Attribute } from '@strapi/strapi';

export interface BlockInnerBlock extends Schema.Component {
  collectionName: 'components_block_inner_blocks';
  info: {
    displayName: 'innerBlock';
  };
  attributes: {
    h1: Attribute.String;
    description: Attribute.RichText;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'block.inner-block': BlockInnerBlock;
    }
  }
}
