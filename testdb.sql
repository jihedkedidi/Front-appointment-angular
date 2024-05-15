PGDMP     8                    |            testdb    15.2    15.2 /    0           0    0    ENCODING    ENCODING        SET client_encoding = 'UTF8';
                      false            1           0    0 
   STDSTRINGS 
   STDSTRINGS     (   SET standard_conforming_strings = 'on';
                      false            2           0    0 
   SEARCHPATH 
   SEARCHPATH     8   SELECT pg_catalog.set_config('search_path', '', false);
                      false            3           1262    27600    testdb    DATABASE     �   CREATE DATABASE testdb WITH TEMPLATE = template0 ENCODING = 'UTF8' LOCALE_PROVIDER = libc LOCALE = 'English_United States.1252';
    DROP DATABASE testdb;
                postgres    false            �            1259    36578    _users    TABLE     �   CREATE TABLE public._users (
    id bigint NOT NULL,
    email character varying(255),
    first_name character varying(255),
    last_name character varying(255),
    password character varying(255),
    phone character varying(255)
);
    DROP TABLE public._users;
       public         heap    postgres    false            �            1259    36577    _users_id_seq    SEQUENCE     v   CREATE SEQUENCE public._users_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 $   DROP SEQUENCE public._users_id_seq;
       public          postgres    false    219            4           0    0    _users_id_seq    SEQUENCE OWNED BY     ?   ALTER SEQUENCE public._users_id_seq OWNED BY public._users.id;
          public          postgres    false    218            �            1259    36587    appointments    TABLE     �   CREATE TABLE public.appointments (
    id bigint NOT NULL,
    date date,
    heure character varying(255),
    location character varying(255),
    minutes character varying(255),
    status integer,
    product_id bigint,
    user_id bigint
);
     DROP TABLE public.appointments;
       public         heap    postgres    false            �            1259    36586    appointments_id_seq    SEQUENCE     |   CREATE SEQUENCE public.appointments_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 *   DROP SEQUENCE public.appointments_id_seq;
       public          postgres    false    221            5           0    0    appointments_id_seq    SEQUENCE OWNED BY     K   ALTER SEQUENCE public.appointments_id_seq OWNED BY public.appointments.id;
          public          postgres    false    220            �            1259    36596    counter_agents    TABLE     �   CREATE TABLE public.counter_agents (
    id bigint NOT NULL,
    location character varying(255),
    product_id bigint,
    user_id bigint
);
 "   DROP TABLE public.counter_agents;
       public         heap    postgres    false            �            1259    36595    counter_agents_id_seq    SEQUENCE     ~   CREATE SEQUENCE public.counter_agents_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 ,   DROP SEQUENCE public.counter_agents_id_seq;
       public          postgres    false    223            6           0    0    counter_agents_id_seq    SEQUENCE OWNED BY     O   ALTER SEQUENCE public.counter_agents_id_seq OWNED BY public.counter_agents.id;
          public          postgres    false    222            �            1259    36416    products    TABLE     c   CREATE TABLE public.products (
    id bigint NOT NULL,
    name character varying(255) NOT NULL
);
    DROP TABLE public.products;
       public         heap    postgres    false            �            1259    36415    products_id_seq    SEQUENCE     �   ALTER TABLE public.products ALTER COLUMN id ADD GENERATED ALWAYS AS IDENTITY (
    SEQUENCE NAME public.products_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);
            public          postgres    false    217            �            1259    28499    roles    TABLE     W   CREATE TABLE public.roles (
    id integer NOT NULL,
    name character varying(20)
);
    DROP TABLE public.roles;
       public         heap    postgres    false            �            1259    28498    roles_id_seq    SEQUENCE     �   CREATE SEQUENCE public.roles_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 #   DROP SEQUENCE public.roles_id_seq;
       public          postgres    false    215            7           0    0    roles_id_seq    SEQUENCE OWNED BY     =   ALTER SEQUENCE public.roles_id_seq OWNED BY public.roles.id;
          public          postgres    false    214            �            1259    36602 
   user_roles    TABLE     ^   CREATE TABLE public.user_roles (
    user_id bigint NOT NULL,
    role_id integer NOT NULL
);
    DROP TABLE public.user_roles;
       public         heap    postgres    false            ~           2604    36581 	   _users id    DEFAULT     f   ALTER TABLE ONLY public._users ALTER COLUMN id SET DEFAULT nextval('public._users_id_seq'::regclass);
 8   ALTER TABLE public._users ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    219    218    219                       2604    36590    appointments id    DEFAULT     r   ALTER TABLE ONLY public.appointments ALTER COLUMN id SET DEFAULT nextval('public.appointments_id_seq'::regclass);
 >   ALTER TABLE public.appointments ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    220    221    221            �           2604    36599    counter_agents id    DEFAULT     v   ALTER TABLE ONLY public.counter_agents ALTER COLUMN id SET DEFAULT nextval('public.counter_agents_id_seq'::regclass);
 @   ALTER TABLE public.counter_agents ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    223    222    223            }           2604    28502    roles id    DEFAULT     d   ALTER TABLE ONLY public.roles ALTER COLUMN id SET DEFAULT nextval('public.roles_id_seq'::regclass);
 7   ALTER TABLE public.roles ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    215    214    215            (          0    36578    _users 
   TABLE DATA           S   COPY public._users (id, email, first_name, last_name, password, phone) FROM stdin;
    public          postgres    false    219   �4       *          0    36587    appointments 
   TABLE DATA           g   COPY public.appointments (id, date, heure, location, minutes, status, product_id, user_id) FROM stdin;
    public          postgres    false    221   �7       ,          0    36596    counter_agents 
   TABLE DATA           K   COPY public.counter_agents (id, location, product_id, user_id) FROM stdin;
    public          postgres    false    223   *8       &          0    36416    products 
   TABLE DATA           ,   COPY public.products (id, name) FROM stdin;
    public          postgres    false    217   k8       $          0    28499    roles 
   TABLE DATA           )   COPY public.roles (id, name) FROM stdin;
    public          postgres    false    215   �8       -          0    36602 
   user_roles 
   TABLE DATA           6   COPY public.user_roles (user_id, role_id) FROM stdin;
    public          postgres    false    224   �8       8           0    0    _users_id_seq    SEQUENCE SET     <   SELECT pg_catalog.setval('public._users_id_seq', 53, true);
          public          postgres    false    218            9           0    0    appointments_id_seq    SEQUENCE SET     B   SELECT pg_catalog.setval('public.appointments_id_seq', 30, true);
          public          postgres    false    220            :           0    0    counter_agents_id_seq    SEQUENCE SET     C   SELECT pg_catalog.setval('public.counter_agents_id_seq', 4, true);
          public          postgres    false    222            ;           0    0    products_id_seq    SEQUENCE SET     =   SELECT pg_catalog.setval('public.products_id_seq', 3, true);
          public          postgres    false    216            <           0    0    roles_id_seq    SEQUENCE SET     :   SELECT pg_catalog.setval('public.roles_id_seq', 3, true);
          public          postgres    false    214            �           2606    36585    _users _users_pkey 
   CONSTRAINT     P   ALTER TABLE ONLY public._users
    ADD CONSTRAINT _users_pkey PRIMARY KEY (id);
 <   ALTER TABLE ONLY public._users DROP CONSTRAINT _users_pkey;
       public            postgres    false    219            �           2606    36594    appointments appointments_pkey 
   CONSTRAINT     \   ALTER TABLE ONLY public.appointments
    ADD CONSTRAINT appointments_pkey PRIMARY KEY (id);
 H   ALTER TABLE ONLY public.appointments DROP CONSTRAINT appointments_pkey;
       public            postgres    false    221            �           2606    36601 "   counter_agents counter_agents_pkey 
   CONSTRAINT     `   ALTER TABLE ONLY public.counter_agents
    ADD CONSTRAINT counter_agents_pkey PRIMARY KEY (id);
 L   ALTER TABLE ONLY public.counter_agents DROP CONSTRAINT counter_agents_pkey;
       public            postgres    false    223            �           2606    36420    products products_pkey 
   CONSTRAINT     T   ALTER TABLE ONLY public.products
    ADD CONSTRAINT products_pkey PRIMARY KEY (id);
 @   ALTER TABLE ONLY public.products DROP CONSTRAINT products_pkey;
       public            postgres    false    217            �           2606    28504    roles roles_pkey 
   CONSTRAINT     N   ALTER TABLE ONLY public.roles
    ADD CONSTRAINT roles_pkey PRIMARY KEY (id);
 :   ALTER TABLE ONLY public.roles DROP CONSTRAINT roles_pkey;
       public            postgres    false    215            �           2606    36608 "   _users ukhchfjvwnaa27i27bfwv0y6n1x 
   CONSTRAINT     ^   ALTER TABLE ONLY public._users
    ADD CONSTRAINT ukhchfjvwnaa27i27bfwv0y6n1x UNIQUE (email);
 L   ALTER TABLE ONLY public._users DROP CONSTRAINT ukhchfjvwnaa27i27bfwv0y6n1x;
       public            postgres    false    219            �           2606    36606    user_roles user_roles_pkey 
   CONSTRAINT     f   ALTER TABLE ONLY public.user_roles
    ADD CONSTRAINT user_roles_pkey PRIMARY KEY (user_id, role_id);
 D   ALTER TABLE ONLY public.user_roles DROP CONSTRAINT user_roles_pkey;
       public            postgres    false    224    224            �           2606    36619 *   counter_agents fkacyr743a5snvnp1fgoufk4438    FK CONSTRAINT     �   ALTER TABLE ONLY public.counter_agents
    ADD CONSTRAINT fkacyr743a5snvnp1fgoufk4438 FOREIGN KEY (product_id) REFERENCES public.products(id);
 T   ALTER TABLE ONLY public.counter_agents DROP CONSTRAINT fkacyr743a5snvnp1fgoufk4438;
       public          postgres    false    223    3204    217            �           2606    36614 (   appointments fkc3ifmfleyrq1x9jf3c6fr8uxk    FK CONSTRAINT     �   ALTER TABLE ONLY public.appointments
    ADD CONSTRAINT fkc3ifmfleyrq1x9jf3c6fr8uxk FOREIGN KEY (user_id) REFERENCES public._users(id);
 R   ALTER TABLE ONLY public.appointments DROP CONSTRAINT fkc3ifmfleyrq1x9jf3c6fr8uxk;
       public          postgres    false    221    3206    219            �           2606    36634 &   user_roles fkeu2s2wbtt1hgogjxaf1adv3ij    FK CONSTRAINT     �   ALTER TABLE ONLY public.user_roles
    ADD CONSTRAINT fkeu2s2wbtt1hgogjxaf1adv3ij FOREIGN KEY (user_id) REFERENCES public._users(id);
 P   ALTER TABLE ONLY public.user_roles DROP CONSTRAINT fkeu2s2wbtt1hgogjxaf1adv3ij;
       public          postgres    false    219    224    3206            �           2606    36629 &   user_roles fkh8ciramu9cc9q3qcqiv4ue8a6    FK CONSTRAINT     �   ALTER TABLE ONLY public.user_roles
    ADD CONSTRAINT fkh8ciramu9cc9q3qcqiv4ue8a6 FOREIGN KEY (role_id) REFERENCES public.roles(id);
 P   ALTER TABLE ONLY public.user_roles DROP CONSTRAINT fkh8ciramu9cc9q3qcqiv4ue8a6;
       public          postgres    false    224    215    3202            �           2606    36624 *   counter_agents fkk0x4b47s5obv4jrftytljgi2k    FK CONSTRAINT     �   ALTER TABLE ONLY public.counter_agents
    ADD CONSTRAINT fkk0x4b47s5obv4jrftytljgi2k FOREIGN KEY (user_id) REFERENCES public._users(id);
 T   ALTER TABLE ONLY public.counter_agents DROP CONSTRAINT fkk0x4b47s5obv4jrftytljgi2k;
       public          postgres    false    219    223    3206            �           2606    36609 (   appointments fkliq61e94vy4lktbgdgoflfkur    FK CONSTRAINT     �   ALTER TABLE ONLY public.appointments
    ADD CONSTRAINT fkliq61e94vy4lktbgdgoflfkur FOREIGN KEY (product_id) REFERENCES public.products(id);
 R   ALTER TABLE ONLY public.appointments DROP CONSTRAINT fkliq61e94vy4lktbgdgoflfkur;
       public          postgres    false    3204    217    221            (   �  x�]�M��0���W�a�����(ȧ�h�%N�	 ���~Q�Yw��R��U�Tw���e��=�_o�S~��M/����M��G��v���2Y�6��h7X7�p8�z�(9j�(��	��1�	T$���('����߿��=������;�f5�F%�P���+�Ll�%4�.����Mi�K}YC�DU�� pmQWU���2��I��,�w^��02U��4�\��f9Fy���ֿ�Y7fZ��e���9�X��˴c@jo��p"�5!��y�����@ItM�1���
�x����Xa�X���ĩeLX[�4��ڳ�
UQ%I�D��x|���������HϋK�޻Kֻ��J��`P�+�w�pC��~��,���T[K�!@� ɽs�+�
!��� l�-|�\�]��������F���Xj�t��)َv��H?��Y�	
u�3��@GH��a�F��<� ����wv�T$+b}�s׃���$���0���!z�<�
'� a_M#�(��ꦃ{�A�r�P�������p6OZXh��n���7���8������I�a�w&2�w��~�ۮyRz[��ȣ�s���vtG�b�����)�2 ;�.�����]���}#���m��OO�:��o�� ��ߐ�?��2H      *   �   x�m��� Cg�_���������7�^��z^ �g)	���UA��Z[[ncI��;�>��ur=�E�9�r��-:!;!�9�?` ��� ��s :�`�e�wDGP�!YO�%9�5�ג��d�"b��%�I��o��h)L�      ,   1   x�3�,)��,�4�44�2�s�͹�.��Ĥ�bN#N�=... �e      &   -   x�3�LN,*IuL���,�2����9����sRK��b���� "��      $   .   x�3���q�v�2��}�]\�C����!�.��~\1z\\\ "{�      -   2   x�34�4�24�4�24�4�26@��(afYY� ��.F��� �ii     