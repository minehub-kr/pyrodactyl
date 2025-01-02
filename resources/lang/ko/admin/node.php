<?php

return [
    'validation' => [
        'fqdn_not_resolvable' => '제공된 FQDN 또는 IP 주소가 유효한 IP 주소로 확인되지 않습니다.',
        'fqdn_required_for_ssl' => '이 노드에서 SSL을 사용하려면 공용 IP 주소로 확인되는 완전한 도메인 이름이 필요합니다.',
    ],
    'notices' => [
        'allocations_added' => '할당이 이 노드에 성공적으로 추가되었습니다.',
        'node_deleted' => '노드가 패널에서 성공적으로 제거되었습니다.',
        'location_required' => '노드를 이 패널에 추가하기 전에 적어도 하나의 위치를 구성해야 합니다.',
        'node_created' => '새 노드를 성공적으로 생성했습니다. \'구성\' 탭을 방문하여 이 머신에서 데몬을 자동으로 구성할 수 있습니다. <strong>서버를 추가하기 전에 적어도 하나의 IP 주소와 포트를 할당해야 합니다.</strong>',
        'node_updated' => '노드 정보가 업데이트되었습니다. 데몬 설정이 변경된 경우 변경 사항을 적용하려면 재부팅해야 합니다.',
        'unallocated_deleted' => '<code>:ip</code>의 할당되지 않은 모든 포트를 삭제했습니다.',
    ],
];
