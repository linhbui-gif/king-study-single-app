import React from 'react';
import { Collapse, CollapsePanelProps, CollapseProps } from 'antd';
import _ from 'lodash';

import Icon, { EIconColor, EIconName } from '@/components/Icon';
import Checkbox from '@/components/Checkbox';

import { TMultipleCheckboxCollapseData, TMultipleCheckboxCollapseProps } from './MultipleCheckboxCollapse.types.d';
import { dataFilterCategoryOptions, findChildrenOfOptions } from './MultipleCheckboxCollapse.data';

const { Panel } = Collapse;

const CollapseModify: React.FC<CollapseProps & { children?: React.ReactNode }> = Collapse;
const PanelModify: React.FC<CollapsePanelProps & { children?: React.ReactNode }> = Panel;

const MultipleCheckboxCollapse: React.FC<TMultipleCheckboxCollapseProps> = ({ value = [], onChange }) => {
  const valueIds = value.map((item) => item.key);

  const handleCheckParent = (checked: boolean, data: TMultipleCheckboxCollapseData): void => {
    const allChild = findChildrenOfOptions(data);

    if (checked) {
      const newData = [...value, ...allChild];
      onChange?.(_.uniqBy(newData, 'key'));
    } else {
      const includeIds = allChild.map((item) => item.key);
      const newData = value?.filter((item) => !includeIds.includes(item.key));
      onChange?.(_.uniqBy(newData, 'key'));
    }
  };

  const handleCheckOption = (checked: boolean, data: TMultipleCheckboxCollapseData): void => {
    const allChild = findChildrenOfOptions(data);

    if (checked) {
      const newData = [...value, ...allChild];
      onChange?.(_.uniqBy(newData, 'key'));
    } else {
      const includeIds = allChild?.map((item) => item.key) || [];
      const newData = value?.filter((item) => !includeIds.includes(item.key));
      onChange?.(_.uniqBy(newData, 'key'));
    }
  };

  const handleCheckItem = (checked: boolean, data: TMultipleCheckboxCollapseData): void => {
    if (checked) {
      const newData = [...value, data];
      onChange?.(_.uniqBy(newData, 'key'));
    } else {
      const newData = value?.filter((item) => item.key !== data.key);
      onChange?.(_.uniqBy(newData, 'key'));
    }
  };

  return (
    <div className="MultipleCheckboxCollapse">
      <CollapseModify
        expandIcon={({ isActive }): React.ReactNode => (
          <div className="MultipleCheckboxCollapse-item-header-icon">
            <Icon name={isActive ? EIconName.Minus : EIconName.Plus} color={EIconColor.WHITE} />
          </div>
        )}
      >
        {dataFilterCategoryOptions.map((parent) => {
          const isParentChildren = parent?.children && parent?.children?.length > 0;

          const optionChildrenIds = findChildrenOfOptions(parent).map((item) => item.key);
          const optionValueIds = value.filter((item) => optionChildrenIds.includes(item.key));

          const isCheckedParent = optionValueIds.length === optionChildrenIds.length;

          return (
            <PanelModify
              header={
                <div className="MultipleCheckboxCollapse-item-header flex items-center">
                  <div className="MultipleCheckboxCollapse-item-header-title">{parent.title}</div>
                  <div className="MultipleCheckboxCollapse-item-checkbox" onClick={(e): void => e.stopPropagation()}>
                    <Checkbox
                      value={isCheckedParent}
                      size="small"
                      onChange={(checked): void => handleCheckParent(checked, parent)}
                    />
                  </div>
                </div>
              }
              key={parent.key}
            >
              {isParentChildren ? (
                <div className="MultipleCheckboxCollapse-item-body">
                  {parent.children.map((option) => {
                    const isOptionChildren = option?.children && option?.children?.length > 0;

                    const optionChildrenIds = findChildrenOfOptions(option).map((item) => item.key);
                    const optionValueIds = value.filter((item) => optionChildrenIds.includes(item.key));

                    const isOptionChecked = optionValueIds.length === optionChildrenIds.length;

                    return (
                      <div key={option.key} className="MultipleCheckboxCollapse-item-body-group">
                        <div className="MultipleCheckboxCollapse-item-body-option flex items-center">
                          <div className="MultipleCheckboxCollapse-item-body-option-title bold">{option.title}</div>
                          <div
                            className="MultipleCheckboxCollapse-item-checkbox"
                            onClick={(e): void => e.stopPropagation()}
                          >
                            <Checkbox
                              size="small"
                              value={isOptionChecked}
                              onChange={(checked): void => handleCheckOption(checked, option)}
                            />
                          </div>
                        </div>

                        {isOptionChildren && (
                          <div className="MultipleCheckboxCollapse-item-body-group">
                            {option.children.map((item) => {
                              const isItemChecked = valueIds.includes(item.key);

                              return (
                                <div
                                  key={item.key}
                                  className="MultipleCheckboxCollapse-item-body-option flex items-center"
                                >
                                  <div className="MultipleCheckboxCollapse-item-body-option-title">{item.title}</div>
                                  <div
                                    className="MultipleCheckboxCollapse-item-checkbox"
                                    onClick={(e): void => e.stopPropagation()}
                                  >
                                    <Checkbox
                                      size="small"
                                      value={isItemChecked}
                                      onChange={(checked): void => handleCheckItem(checked, item)}
                                    />
                                  </div>
                                </div>
                              );
                            })}
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              ) : (
                <></>
              )}
            </PanelModify>
          );
        })}
      </CollapseModify>
    </div>
  );
};

export default MultipleCheckboxCollapse;
