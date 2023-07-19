import React, { FC } from "react";

import classNames from "classnames";

import { useSettingsData } from "@contexts/settings/settings.state";

import Icon from "@components/ui/Icon";
import Skeleton from "@components/ui/Skeleton/Skeleton";

import { getFormattedDate } from "@utils/helpers/get-formatted-date";
import { temperatureConvertor } from "@utils/helpers/temperature-convertor";

import "./GeneralInfo.scss";

interface GeneralInfoProps {
  name: string;
  temp: number;
  iconName: string;
  className?: string;
}

const GeneralInfo: FC<GeneralInfoProps> = ({
  name,
  temp,
  iconName,
  className,
}) => {
  const classes = classNames("general-info", className, {
    "general-info_skeleton": !name
  });

  const { temperatureScale } = useSettingsData();

  return (
    <div className={classes}>
      <div className="general-info__info-group">
        <h1 className="general-info__name">{name || <Skeleton />}</h1>
        <p className="general-info__paragraph">
          {name ? getFormattedDate() : <Skeleton />}
        </p>
      </div>
      {iconName ? (
        <Icon name={iconName} className="general-info__image" />
      ) : (
        <Skeleton variant="rounded" className="general-info__image" />
      )}
      <p className="xxx-large-text bold-weight general-info__temperature">
        {temp ? (
          `${temperatureConvertor(temp, temperatureScale)}°`
        ) : (
          <Skeleton />
        )}
      </p>
    </div>
  );
};

export default GeneralInfo;
