import type { Schema, Struct } from '@strapi/strapi';

export interface GridGrid extends Struct.ComponentSchema {
  collectionName: 'components_grid_grids';
  info: {
    displayName: 'grid';
    icon: 'crop';
  };
  attributes: {
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'> &
      Schema.Attribute.Required;
    slug: Schema.Attribute.String & Schema.Attribute.Required;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'grid.grid': GridGrid;
    }
  }
}
