-- Relacionando os nomes das vias às suas vias variantes
SELECT
    v.id AS via_id,
    v.vias,
    vv.variante_id,
    va.vias AS variantes
FROM
    vias_main v
JOIN
    vias_variantes vv ON v.id = vv.id
JOIN
    variantes va ON vv.variante_id = va.variante_id;
