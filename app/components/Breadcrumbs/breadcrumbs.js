import React, { useMemo } from 'react';
import { BreadcrumbItemsWrapper, BreadcrumbLink, Line } from './styles';

/**
 * Breadcrumbs Component
 * @param {Object} props - Component props
 * @param {Array} props.breadcrumbs - Array of breadcrumb items
 * @param {string} props.breadcrumbs[].label - Display text for the breadcrumb
 * @param {string} props.breadcrumbs[].href - URL for the breadcrumb link (ignored for last item)
 */
export default function Breadcrumbs({ breadcrumbs = [] }) {
  // Memoize breadcrumb items to prevent unnecessary re-renders
  const breadcrumbItems = useMemo(() => {
    return breadcrumbs.map((item, index) => (
      <React.Fragment key={index}>
        <BreadcrumbLink href={item.href}>{item.label}</BreadcrumbLink>
        {/* Add separator between items, but not after the last one */}
        {index < breadcrumbs.length - 1 && <Line>/</Line>}
      </React.Fragment>
    ));
  }, [breadcrumbs]);

  return <BreadcrumbItemsWrapper>{breadcrumbItems}</BreadcrumbItemsWrapper>;
}
