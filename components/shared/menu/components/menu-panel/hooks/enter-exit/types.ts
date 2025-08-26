import { ContextMenu } from '@/components/shared/menu/store';
import { ContextPopOver, Placement } from '@/components';

type MenuContext = Omit<ContextMenu, 'onSelectItem'>;
type PopOverContext = Pick<ContextPopOver, 'onCloseAll' | 'open' | 'mapRefs'>;

export interface UseEnterExitProps extends MenuContext, PopOverContext {
  panelRef: React.RefObject<HTMLDivElement | null>;
  panelId: string;
  placement?: Placement;
}
