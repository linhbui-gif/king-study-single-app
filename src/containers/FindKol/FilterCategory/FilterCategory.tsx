import React, { useEffect, useState } from 'react';
import { Col, Row } from 'antd';
import classNames from 'classnames';

import Icon, { EIconColor, EIconName } from '@/components/Icon';
import Select from '@/components/Select';
import MultipleCheckboxCollapse, { TMultipleCheckboxCollapseData } from '@/components/MultipleCheckboxCollapse';
import {
  dataFilterCategoryOptions,
  findChildrenOfOptions,
} from '@/components/MultipleCheckboxCollapse/MultipleCheckboxCollapse.data';

import { TFilterCategoryProps } from './FilterCategory.types';

const FilterCategory: React.FC<TFilterCategoryProps> = ({ onFilter }) => {
  const allOptionsFilter = findChildrenOfOptions({ key: 'default', children: dataFilterCategoryOptions });
  const [filterState, setFilterState] = useState<TMultipleCheckboxCollapseData[]>(allOptionsFilter);

  const isSelectAll = filterState.length === allOptionsFilter.length;

  const handleSelectAll = (): void => {
    if (isSelectAll) {
      setFilterState([]);
      onFilter?.();
    } else {
      setFilterState(allOptionsFilter);
      onFilter?.();
    }
  };

  return (
    <div className="FilterCategory">
      <div className="FilterCategory-wrapper">
        <div className="FilterCategory-header flex items-center">
          <div className="FilterCategory-header-icon">
            <Icon name={EIconName.Filter} color={EIconColor.FIORD} />
          </div>
          <div className="FilterCategory-header-title">
            Filter <span style={{ color: EIconColor.SCREAMIN_GREEN }}>(4,635)</span>
          </div>
          {!isSelectAll ? (
            <div className={classNames('FilterCategory-header-all flex items-center nowrap')} onClick={handleSelectAll}>
              Select All
            </div>
          ) : (
            <div className={classNames('FilterCategory-header-all flex items-center nowrap')} onClick={handleSelectAll}>
              <Icon name={EIconName.Reload} color={EIconColor.LYNCH} />
              Reset All
            </div>
          )}
        </div>

        <div className="FilterCategory-body">
          <Row gutter={[16, 16]}>
            <Col span={24}>
              <Select
                placeholder="Select location"
                options={[
                  { label: 'Location 1', value: '1' },
                  { label: 'Location 2', value: '2' },
                  { label: 'Location 3', value: '3' },
                ]}
                onChange={onFilter}
              />
            </Col>
            <Col span={24}>
              <Select
                placeholder="Select range"
                options={[
                  { label: 'Range 1', value: '1' },
                  { label: 'Range 2', value: '2' },
                  { label: 'Range 3', value: '3' },
                ]}
                onChange={onFilter}
              />
            </Col>
            <Col span={24}>
              <MultipleCheckboxCollapse
                value={filterState}
                onChange={(data): void => {
                  setFilterState(data);
                  onFilter?.();
                }}
              />
            </Col>
          </Row>
        </div>
      </div>
    </div>
  );
};

export default FilterCategory;
