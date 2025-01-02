<?php

return [
    'exceptions' => [
        'no_new_default_allocation' => '이 서버의 기본 할당을 삭제하려고 하지만 사용할 대체 할당이 없습니다.',
        'marked_as_failed' => '이 서버는 이전 설치에서 실패한 것으로 표시되었습니다. 현재 상태는 이 상태에서 전환할 수 없습니다.',
        'bad_variable' => ':name 변수에 유효성 검사 오류가 발생했습니다.',
        'daemon_exception' => '데몬과 통신을 시도하는 동안 예외가 발생하여 HTTP/:code 응답 코드가 반환되었습니다. 이 예외는 기록되었습니다. (요청 ID: :request_id)',
        'default_allocation_not_found' => '요청된 기본 할당이 이 서버의 할당에서 찾을 수 없습니다.',
    ],
    'alerts' => [
        'startup_changed' => '이 서버의 시작 구성 설정이 업데이트되었습니다. 이 서버의 네스트 또는 에그가 변경된 경우 재설치가 지금 진행됩니다.',
        'server_deleted' => '서버가 시스템에서 성공적으로 삭제되었습니다.',
        'server_created' => '서버가 패널에 성공적으로 생성되었습니다. 이 서버가 완전히 설치될 때까지 데몬에 몇 분의 시간이 필요합니다.',
        'build_updated' => '이 서버의 빌드 세부 정보가 업데이트되었습니다. 일부 변경 사항은 적용하려면 재시작이 필요할 수 있습니다.',
        'suspension_toggled' => '서버 정지 상태가 :status로 변경되었습니다.',
        'rebuild_on_boot' => '이 서버는 Docker 컨테이너 재구성이 필요하도록 표시되었습니다. 서버가 시작될 때 이 작업이 수행됩니다.',
        'install_toggled' => '이 서버의 설치 상태가 전환되었습니다.',
        'server_reinstalled' => '이 서버는 지금부터 재설치가 시작되도록 대기열에 추가되었습니다.',
        'details_updated' => '서버 세부 정보가 성공적으로 업데이트되었습니다.',
        'docker_image_updated' => '기본 Docker 이미지를 이 서버에 사용할 수 있도록 성공적으로 변경했습니다. 이 변경 사항을 적용하려면 재부팅이 필요합니다.',
        'node_required' => '이 패널에 서버를 추가하려면 적어도 하나의 노드를 구성해야 합니다.',
        'transfer_nodes_required' => '서버를 전송하려면 적어도 두 개의 노드를 구성해야 합니다.',
        'transfer_started' => '서버 전송이 시작되었습니다.',
        'transfer_not_viable' => '선택한 노드에 이 서버를 수용할 수 있는 필요한 디스크 공간 또는 메모리가 없습니다.',
    ],
];
