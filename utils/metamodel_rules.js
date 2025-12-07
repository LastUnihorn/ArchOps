/**
 * Разрешённые комбинации [sourceType, targetType] для каждого типа связи.
 * Если массив пустой — связь разрешена между любыми типами (универсальная).
 */
var ALLOWED_RELATIONSHIPS = {
    
    "serving-relationship": [
        ["communication-network", "device"],
        ["technology-service", "application-component"]
    ],
    
    "realization-relationship": [
        ["application-function", "requirement"],
        ["application-component", "application-service"],
        ["artifact", "data-object"],
        ["node", "technology-service"]
    ],
    
    "composition-relationship": [
        ["node", "technology-interface"]
    ],
    
    "aggregation-relationship": [
        ["application-component", "application-component"],
        ["node", "system-software"],
        ["node", "device"]
    ],
    
    "assignment-relationship": [
        ["application-component", "application-function"],
        ["node", "artifact"]
    ],
    
    "access-relationship": [
        ["application-component", "data-object"]
    ],
    
    "triggering-relationship": [
        ["node", "technology-interface"],
        ["communication-network", "technology-interface"]
    ],
    
    "flow-relationship": [
        ["application-component", "application-component"]
    ]
};
