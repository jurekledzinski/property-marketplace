import stylesCardFile from '../components/card-file-preview/CardFilePreview.module.css';
import stylesPreview from '../PreviewFiles.module.css';
import { classNames, generateClassNames } from '@/helpers';
import { PreviewFileProps } from '../types';

type Placement = Pick<PreviewFileProps, 'gridPlacement'>['gridPlacement'];

export const getClassNamesPreviewFiles = (gridPlacement?: Placement) =>
  classNames(
    stylesPreview.grid,
    generateClassNames(stylesPreview, { [`${gridPlacement}`]: true })
  );

export const getClassNamesCardFilePreview = (gridPlacement?: Placement) => ({
  card: classNames(
    stylesCardFile.card,
    generateClassNames(
      { ...stylesPreview, ...stylesCardFile },
      { [`card-${gridPlacement}`]: true }
    )
  ),
  button: stylesCardFile.closeButton,
  title: stylesCardFile.title,
});
