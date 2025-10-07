import styles from './FiltersChipsPanel.module.css';
import { capitalizeFirstLetter } from '@/utils-client';
import { Chip } from '@/components';
import { FiltersChipsPanelProps } from './types';

export const FiltersChipsPanel = ({
  filters,
  onDelete,
}: FiltersChipsPanelProps) => {
  return (
    <div className={styles.chipBar}>
      {Object.entries(filters).map((filter) => {
        if (Array.isArray(filter[1])) {
          return filter[1].map((amenity) => {
            return (
              <Chip
                name={filter[0]}
                id={amenity}
                key={amenity}
                label={`Amenity: ${capitalizeFirstLetter(amenity)}`}
                color="success"
                onDelete={onDelete}
              />
            );
          });
        } else {
          return (
            <Chip
              name={filter[0]}
              id={filter[0]}
              key={filter[0]}
              label={`${capitalizeFirstLetter(
                filter[0]
              )}: ${capitalizeFirstLetter(filter[1].toString())}`}
              color="success"
              onDelete={onDelete}
            />
          );
        }
      })}
    </div>
  );
};
