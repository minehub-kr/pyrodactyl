<?php

return [
    'daemon_connection_failed' => '데몬과 통신을 시도하는 동안 예외가 발생하여 HTTP/:code 응답 코드가 반환되었습니다. 이 예외는 기록되었습니다.',
    'node' => [
        'servers_attached' => '노드는 삭제되기 위해 연결된 서버가 없어야 합니다.',
        'daemon_off_config_updated' => '데몬 구성 <strong>이 업데이트되었습니다</strong>. 그러나 데몬의 구성 파일을 자동으로 업데이트하려고 시도하는 동안 오류가 발생했습니다. 데몬이 이러한 변경 사항을 적용하려면 구성 파일(config.yml)을 수동으로 업데이트해야 합니다.',
    ],
    'allocations' => [
        'server_using' => '현재 이 할당에 서버가 할당되어 있습니다. 할당은 현재 서버가 할당되어 있지 않은 경우에만 삭제할 수 있습니다.',
        'too_many_ports' => '한 번에 1000개 이상의 포트를 추가하는 것은 지원되지 않습니다.',
        'invalid_mapping' => ':port에 제공된 매핑이 잘못되어 처리할 수 없습니다.',
        'cidr_out_of_range' => 'CIDR 표기법은 /25에서 /32 사이의 마스크만 허용합니다.',
        'port_out_of_range' => '할당의 포트는 1024보다 크고 65535 이하이어야 합니다.',
    ],
    'nest' => [
        'delete_has_servers' => '활성 서버가 연결된 Nest는 패널에서 삭제할 수 없습니다.',
        'egg' => [
            'delete_has_servers' => '활성 서버가 연결된 Egg는 패널에서 삭제할 수 없습니다.',
            'invalid_copy_id' => '스크립트를 복사할 Egg가 존재하지 않거나 자체적으로 스크립트를 복사하고 있습니다.',
            'must_be_child' => '이 Egg의 "설정 복사" 지시문은 선택한 Nest의 하위 옵션이어야 합니다.',
            'has_children' => '이 Egg는 하나 이상의 다른 Egg의 부모입니다. 이 Egg를 삭제하기 전에 해당 Egg를 삭제하십시오.',
        ],
        'variables' => [
            'env_not_unique' => '환경 변수 :name은(는) 이 Egg에 대해 고유해야 합니다.',
            'reserved_name' => '환경 변수 :name은(는) 보호되어 있으며 변수에 할당할 수 없습니다.',
            'bad_validation_rule' => '유효성 검사 규칙 ":rule"은(는) 이 애플리케이션에 유효한 규칙이 아닙니다.',
        ],
        'importer' => [
            'json_error' => 'JSON 파일을 구문 분석하는 동안 오류가 발생했습니다: :error.',
            'file_error' => '제공된 JSON 파일이 유효하지 않습니다.',
            'invalid_json_provided' => '제공된 JSON 파일이 인식할 수 있는 형식이 아닙니다.',
        ],
    ],
    'subusers' => [
        'editing_self' => '자신의 하위 사용자 계정을 편집하는 것은 허용되지 않습니다.',
        'user_is_owner' => '서버 소유자를 이 서버의 하위 사용자로 추가할 수 없습니다.',
        'subuser_exists' => '해당 이메일 주소를 가진 사용자가 이미 이 서버의 하위 사용자로 할당되어 있습니다.',
    ],
    'databases' => [
        'delete_has_databases' => '활성 데이터베이스가 연결된 데이터베이스 호스트 서버를 삭제할 수 없습니다.',
    ],
    'tasks' => [
        'chain_interval_too_long' => '연쇄 작업의 최대 간격 시간은 15분입니다.',
    ],
    'locations' => [
        'has_nodes' => '활성 노드가 연결된 위치를 삭제할 수 없습니다.',
    ],
    'users' => [
        'node_revocation_failed' => '<a href=":link">노드 #:node</a>에서 키를 해지하지 못했습니다. :error',
    ],
    'deployment' => [
        'no_viable_nodes' => '자동 배포를 위한 요구 사항을 충족하는 노드를 찾을 수 없습니다.',
        'no_viable_allocations' => '자동 배포를 위한 요구 사항을 충족하는 할당을 찾을 수 없습니다.',
    ],
    'api' => [
        'resource_not_found' => '요청한 리소스가 이 서버에 존재하지 않습니다.',
    ],
];
