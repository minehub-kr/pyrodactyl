<?php

return [
    'location' => [
        'no_location_found' => '제공된 짧은 코드와 일치하는 기록을 찾을 수 없습니다.',
        'ask_short' => '위치 짧은 코드',
        'ask_long' => '위치 설명',
        'created' => '새 위치 (:name)을(를) ID :id(으)로 성공적으로 생성했습니다.',
        'deleted' => '요청된 위치를 성공적으로 삭제했습니다.',
    ],
    'user' => [
        'search_users' => '사용자 이름, 사용자 ID 또는 이메일 주소를 입력하세요',
        'select_search_user' => '삭제할 사용자 ID (다시 검색하려면 \'0\' 입력)',
        'deleted' => '사용자가 패널에서 성공적으로 삭제되었습니다.',
        'confirm_delete' => '이 사용자를 패널에서 삭제하시겠습니까?',
        'no_users_found' => '제공된 검색어에 대한 사용자를 찾을 수 없습니다.',
        'multiple_found' => '제공된 사용자에 대해 여러 계정이 발견되어 --no-interaction 플래그로 인해 사용자를 삭제할 수 없습니다.',
        'ask_admin' => '이 사용자가 관리자입니까?',
        'ask_email' => '이메일 주소',
        'ask_username' => '사용자 이름',
        'ask_name_first' => '이름',
        'ask_name_last' => '성',
        'ask_password' => '비밀번호',
        'ask_password_tip' => '사용자에게 무작위 비밀번호를 이메일로 보내는 계정을 생성하려면 이 명령을 다시 실행하고 `--no-password` 플래그를 전달하세요.',
        'ask_password_help' => '비밀번호는 최소 8자 이상이어야 하며 대문자와 숫자를 포함해야 합니다.',
        '2fa_help_text' => [
            '이 명령은 사용자의 계정에 2단계 인증이 활성화된 경우 이를 비활성화합니다. 사용자가 계정에 접근할 수 없는 경우에만 계정 복구 명령으로 사용해야 합니다.',
            '이것이 원하지 않는 작업이라면, 이 프로세스를 종료하려면 CTRL+C를 누르세요.',
        ],
        '2fa_disabled' => ':email에 대한 2단계 인증이 비활성화되었습니다.',
    ],
    'schedule' => [
        'output_line' => '`:schedule` (:hash)의 첫 번째 작업에 대한 작업을 디스패치합니다.',
    ],
    'maintenance' => [
        'deleting_service_backup' => '서비스 백업 파일 :file을(를) 삭제 중입니다.',
    ],
    'server' => [
        'rebuild_failed' => '노드 ":node"에서 ":name" (#:id)에 대한 재구성 요청이 오류로 실패했습니다: :message',
        'reinstall' => [
            'failed' => '노드 ":node"에서 ":name" (#:id)에 대한 재설치 요청이 오류로 실패했습니다: :message',
            'confirm' => '서버 그룹에 대해 재설치를 진행하려고 합니다. 계속하시겠습니까?',
        ],
        'power' => [
            'confirm' => ':count개의 서버에 대해 :action 작업을 수행하려고 합니다. 계속하시겠습니까?',
            'action_failed' => '노드 ":node"에서 ":name" (#:id)에 대한 전원 작업 요청이 오류로 실패했습니다: :message',
        ],
    ],
    'environment' => [
        'mail' => [
            'ask_smtp_host' => 'SMTP 호스트 (예: smtp.gmail.com)',
            'ask_smtp_port' => 'SMTP 포트',
            'ask_smtp_username' => 'SMTP 사용자 이름',
            'ask_smtp_password' => 'SMTP 비밀번호',
            'ask_mailgun_domain' => 'Mailgun 도메인',
            'ask_mailgun_endpoint' => 'Mailgun 엔드포인트',
            'ask_mailgun_secret' => 'Mailgun 비밀키',
            'ask_mandrill_secret' => 'Mandrill 비밀키',
            'ask_postmark_username' => 'Postmark API 키',
            'ask_driver' => '이메일을 보내기 위해 어떤 드라이버를 사용해야 합니까?',
            'ask_mail_from' => '이메일이 발송될 이메일 주소',
            'ask_mail_name' => '이메일이 발송될 이름',
            'ask_encryption' => '사용할 암호화 방법',
        ],
    ],
];
