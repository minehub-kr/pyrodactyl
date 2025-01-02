<?php

return [
    'notices' => [
        'created' => '새 Nest, :name,이(가) 성공적으로 생성되었습니다.',
        'deleted' => '요청된 Nest를 패널에서 성공적으로 삭제했습니다.',
        'updated' => 'Nest 구성 옵션이 성공적으로 업데이트되었습니다.',
    ],
    'eggs' => [
        'notices' => [
            'imported' => '이 Egg와 관련된 변수가 성공적으로 가져왔습니다.',
            'updated_via_import' => '제공된 파일을 사용하여 이 Egg가 업데이트되었습니다.',
            'deleted' => '요청된 Egg를 패널에서 성공적으로 삭제했습니다.',
            'updated' => 'Egg 구성이 성공적으로 업데이트되었습니다.',
            'script_updated' => 'Egg 설치 스크립트가 업데이트되었으며 서버가 설치될 때마다 실행됩니다.',
            'egg_created' => '새로운 Egg가 성공적으로 생성되었습니다. 이 새로운 Egg를 적용하려면 실행 중인 모든 데몬을 재시작해야 합니다.',
        ],
    ],
    'variables' => [
        'notices' => [
            'variable_deleted' => '변수 ":variable"이(가) 삭제되었으며 서버가 다시 빌드되면 더 이상 사용할 수 없습니다.',
            'variable_updated' => '변수 ":variable"이(가) 업데이트되었습니다. 이 변수를 사용하는 서버를 다시 빌드해야 변경 사항이 적용됩니다.',
            'variable_created' => '새 변수가 성공적으로 생성되어 이 Egg에 할당되었습니다.',
        ],
    ],
];
